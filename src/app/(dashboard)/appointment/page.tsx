import { onGetAllBookingsForCurrentUser } from "@/actions/appointment";
import AllAppointments from "@/components/appointment/all-appointments";
import InfoBar from "@/components/infobar";
import Section from "@/components/section-label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const user = await currentUser();
  if (!user) {
    return (
      <div className="w-full flex justify-center">
        <p>No user found</p>
      </div>
    );
  }
  let domainBookings;
  try {
    domainBookings = await onGetAllBookingsForCurrentUser(user.id);
  } catch (e) {
    return (
      <div className="w-full flex justify-center">
        <p>Error loading appointments</p>
      </div>
    );
  }
  const today = new Date();
  if (!domainBookings || !Array.isArray(domainBookings.bookings)) {
    return (
      <div className="w-full flex justify-center">
        <p>No Appointments</p>
      </div>
    );
  }
  const bookingsExistToday = domainBookings.bookings.filter((booking: any) => {
    if (!booking.date) return false;
    const bookingDate = booking.date instanceof Date ? booking.date : new Date(booking.date);
    return bookingDate.getDate() === today.getDate();
  });

  return (
    <>
      <InfoBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-1 h-0 gap-5">
        <div className="lg:col-span-2 overflow-y-auto">
          <AllAppointments bookings={domainBookings?.bookings} />
        </div>
        <div className="col-span-1">
          <Section
            label="Bookings For Today"
            message="All your bookings for today are mentioned below."
          />
          {bookingsExistToday.length ? (
            bookingsExistToday.map((booking: any) => {
              const createdAt = booking.createdAt instanceof Date ? booking.createdAt : new Date(booking.createdAt);
              const email = typeof booking.email === "string" ? booking.email : "";
              return (
                <Card
                  key={booking.id}
                  className="rounded-xl overflow-hidden mt-4"
                >
                  <CardContent className="p-0 flex">
                    <div className="w-4/12 text-xl bg-peach py-10 flex justify-center items-center font-bold">
                      {booking.slot}
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between w-full p-3">
                        <p className="text-sm">
                          created
                          <br />
                          {createdAt.getHours()} {createdAt.getMinutes()} {createdAt.getHours() > 12 ? "PM" : "AM"}
                        </p>
                        <p className="text-sm">
                          Domain <br />
                          {booking.Customer?.Domain?.name || "N/A"}
                        </p>
                      </div>
                      <Separator orientation="horizontal" />
                      <div className="w-full flex items-center p-3 gap-2">
                        <Avatar>
                          <AvatarFallback>{email[0] || "?"}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm">{email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="w-full flex justify-center">
              <p>No Appointments For Today</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
