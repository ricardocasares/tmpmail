import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Entry from "../components/Entry";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { message } from "../lib/api";
import Layout, { Container } from "../components/Layout";

const PaddedEntry = styled(Entry)`
  padding: 10px 0;
  border-bottom: none;
  margin-top: 20px;

  :hover {
    background: initial;
  }
`;

export default ({
  match: {
    params: { inbox, id }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState();

  useEffect(() => {
    setLoading(true);
    message(id).then(data => {
      setEmail(data);
      setLoading(false);
    });
  }, [id, inbox]);

  return (
    <Layout inbox={inbox}>
      {loading && <Loading />}
      <Container>
        {!loading && email && (
          <PaddedEntry
            id={email.id}
            date={email.date}
            href={`/${inbox}/messages/${id}`}
            from={email.from}
            subject={email.subject}
            onDelete={() => ({})}
          />
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
