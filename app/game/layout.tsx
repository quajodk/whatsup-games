import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { activityLog } from "@/lib/data";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function GameLayout({ children }: Props) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Game Area */}
        <div className="lg:col-span-2">{children}</div>

        {/* Opponent Info and Activity Log */}
        <div className="space-y-6">
          {/* Opponent Info */}
          <Card>
            <CardHeader>
              <CardTitle>Your Opponent</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="/placeholder.svg?height=80&width=80"
                  alt="Opponent"
                />
                <AvatarFallback>OP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Rating: 1500</p>
              </div>
            </CardContent>
          </Card>

          {/* Activity Log */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                {activityLog.map((activity) => (
                  <div key={activity.id} className="mb-4 last:mb-0">
                    <p className="font-semibold">{activity.player}</p>
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-500">
                      {activity.timestamp}
                    </p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
