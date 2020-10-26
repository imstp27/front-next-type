import Layout from '@components/Layout';
import React from 'react';
import { Typography } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from 'documents/post.doc';

const { Title } = Typography;

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  console.log('data : ', data);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Title>สวัสดี Next.js 👋</Title>
      <p></p>
    </Layout>
  );
};

export default IndexPage;
