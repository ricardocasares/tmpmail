import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import Entry from "../components/Entry";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { message } from "../lib/api";
import Layout, { Container } from "../components/Layout";

export const Email = ({
  match: {
    params: { inbox, id }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState();

  useEffect(() => {
    setLoading(true);
    message(id)
      .then(data => {
        setEmail(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Layout inbox={inbox}>
      {loading && <Loading />}
      <Container>
        {!loading && email && (
          <Box pt={10} pb={10}>
            <Entry
              id={email.id}
              date={email.date}
              href={`/${inbox}/messages/${id}`}
              from={email.from}
              subject={email.subject}
            />
          </Box>
        )}
        {!loading && email && (
          <Message
            data-message-body
            dangerouslySetInnerHTML={{ __html: email.html || email.plain }}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Email;
