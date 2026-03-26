const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    text VARCHAR(500), 
    name VARCHAR(250), 
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, name) 
VALUES
  ('Hi there!', 'Amando'),
  ('Hello world!', 'Charles'),
  ('How''s everyone doing today!', 'Sophia'),
  ('Just Finished My Project!', 'Liam'),
  ('Anyone up for a game tonight!', 'Olivia');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://hmad:hamidon1@localhost:5432/message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();