import { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='Some Street5, some city'
      description='A first meetup'
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street5, some city',
        description: 'A first meetup',
      },
    },
  }
}
export default MeetupDetails
