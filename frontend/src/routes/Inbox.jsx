import React, { useState, useEffect } from "react";
import { messages } from "../lib/api";
import { fromEpoch } from "../lib/time";
import Box from "../components/Box";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Empty from "../components/Empty";
import Entry from "../components/Entry";
import { List, Item } from "../components/List";

export default ({
  match: {
    params: { inbox }
  }
}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    messages(inbox)
      .then(data => {
        setList(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [inbox]);

  return (
    <Layout inbox={inbox}>
      {loading && <Loading />}
      {!loading && !list.length && <Empty />}
      {!loading && !!list.length && (
        <List>
          {list.map(({ id, from, subject, timestamp }, i) => (
            <Item key={id}>
              <Box p={10}>
                <Entry
                  id={id}
                  date={fromEpoch(timestamp)}
                  href={`/${inbox}/messages/${id}`}
                  from={from}
                  subject={subject}
                  onDelete={() => ({})}
                />
              </Box>
            </Item>
          ))}
        </List>
      )}
    </Layout>
  );
};
