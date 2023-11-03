import { useRouter } from "next/router";
import MeetupDetails from "./../../components/meetups/MeetupDetails";

export default function MeetupDetailsPage() {
  return (
    <MeetupDetails
      image=""
      title="A First Meetup"
      address="Some address 5, 1234"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from an API
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cross_Harbour_Tunnel_%281%29.JPG/1280px-Cross_Harbour_Tunnel_%281%29.JPG",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 1234",
        description: "This is a first meetup",
      },
    },
  };
}
