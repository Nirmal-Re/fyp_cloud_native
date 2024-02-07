import cron from "node-cron";

import {
  deletePastNotifications,
  addNotification,
} from "../model/notification";

import grpcClient from "../grpc/client";
import { uidResponse } from "../proto/logsPackage/uidResponse";

interface Notification {
  uid: Number;
  msg: string;
}

// Run once a day at 23:59
cron.schedule("55 23 * * *", async () => {
  deletePastNotifications();
});

//TODO change it to every hour
cron.schedule("0 * * * *", async () => {
  console.log("Generating notifications...");
  const currentHour = new Date().getHours().toString().padEnd(5, ":000");
  grpcClient.getUid({}, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    const { uid } = response as uidResponse;
    const users = uid ? uid : [];
    console.log("Users: ", users);
    for (const user of users) {
      const notification: Notification = {
        uid: user,
        msg: `Please log your mood for ${currentHour}!`,
      };
      addNotification(notification);
    }
  });
  // Generate a notification for each user
});
