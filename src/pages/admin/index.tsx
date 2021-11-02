import { GetServerSideProps } from 'next'

const IndexPage = () => {
  return "";
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/admin/cultures'
    }
  }
}

export default IndexPage
