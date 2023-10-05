type CreateEventFormValues = {
    name: string;
    eventType: string;
    startDate: string;
    endDate: string;
    eventCategory: string;
    location: string;
    description: string;
    ticketName: string;
    ticketPrice: string;
    ticketsQuantity: string;
    speakerName: string;
    speakerEmail: string;
    speakerPhone: string;
    speakerRemark: string;
    sponsorName: string;
    sponsorCompanyName: string;
    sponsorCompanyEmail: string;
    sponsorAmount: string;
    sponsorRemark: string;
    sponsorDescription: string;
};

type User =
    | {
          id: string;
          name: string;
          email: string;
          image?: string;
          createdAt?: string;
          updatedAt?: string;
          emailVerified?: DateTime;
      }
    | Undefined;
