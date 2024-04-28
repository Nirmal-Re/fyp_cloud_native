az network public-ip create -n myPublicIp -g cloud-native-group-second --allocation-method Static --sku Standard
az network vnet create -n myVnet -g cloud-native-group-second --address-prefix 10.0.0.0/16 --subnet-name mySubnet --subnet-prefix 10.0.0.0/24 
az network application-gateway create -n myApplicationGateway -g cloud-native-group-second --sku Standard_v2 --public-ip-address myPublicIp --vnet-name myVnet --subnet mySubnet --priority 100

$appgwId=az network application-gateway show -n myApplicationGateway -g cloud-native-group-second -o tsv --query "id"
az aks enable-addons -n cloud-native-aks-2 -g cloud-native-group-second -a ingress-appgw --appgw-id $appgwId

$nodeResourceGroup=az aks show -n cloud-native-aks-2 -g cloud-native-group-second -o tsv --query "nodeResourceGroup"
$aksVnetName=az network vnet list -g $nodeResourceGroup -o tsv --query "[0].name"

$aksVnetId=az network vnet show -n $aksVnetName -g $nodeResourceGroup -o tsv --query "id"
az network vnet peering create -n AppGWtoAKSVnetPeering -g cloud-native-group-second --vnet-name myVnet --remote-vnet $aksVnetId --allow-vnet-access

$appGWVnetId=az network vnet show -n myVnet -g cloud-native-group-second -o tsv --query "id"
az network vnet peering create -n AKStoAppGWVnetPeering -g $nodeResourceGroup --vnet-name $aksVnetName --remote-vnet $appGWVnetId --allow-vnet-access

az aks get-credentials -n cloud-native-aks-2 -g cloud-native-group-second

kubectl apply -f https://raw.githubusercontent.com/Azure/application-gateway-kubernetes-ingress/master/docs/examples/aspnetapp.yaml

