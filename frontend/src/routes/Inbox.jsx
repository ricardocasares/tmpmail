import React, { useState, useEffect } from "react";
import { messages } from "../lib/api";
import Box from "../components/Box";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Empty from "../components/Empty";
import Entry from "../components/Entry";
import { List, Item } from "../components/List";

export const Inbox = ({
  match: {
    params: { inbox }
  }
}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    setLoading(true);
    messages(inbox)
      .then(data => {
        setList(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [inbox, timestamp]);

  return (
    <Layout inbox={inbox}>
      {loading && <Loading />}
      {!loading && !list.length && <Empty refresh={setTimestamp} />}
      {!loading && !!list.length && (
        <List>
          {list.map(({ id, from, subject, date }, i) => (
            <Item key={id}>
              <Box p={10}>
                <Entry
                  id={id}
                  date={date}
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

export default Inbox;
