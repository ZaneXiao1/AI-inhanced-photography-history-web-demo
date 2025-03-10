
#  Project Outline
Photography History: A Cloud-Native, LLM-Driven Pipeline
- Data Pipeline: Crawled Wikipedia via Python scripts, stored raw data in AWS S3, and used OpenAI API for text summarization before loading into a relational database.
- Cloud Architecture: Leveraged AWS Lambda for automated QA checks, stored structured data in AWS RDS, and configured GitHub-driven CI/CD deployments through AWS Amplify.
- Front End: Built an interactive React timeline letting users filter historical photography events by style, with live data fetching from the Amplify-hosted API.
- LLM Integration: Created concise photographer bios using GPT-based summarization and deployed an LLM Agent to periodically audit database records, maintaining data consistency.  

# Detailed Processes
Data Pipeline
Automated data ingestion from Wikipedia’s API via Python scripts, storing raw information in AWS S3.
Utilized pandas for cleaning, deduplication, and formatting (e.g., date standardization).
Employed the OpenAI API to generate concise biographies for each photographer, then saved the enhanced records to a relational database (PostgreSQL or Snowflake).

Cloud Architecture
Deployed serverless “Agent” scripts on AWS Lambda to run periodic QA checks on the database (e.g., spotting duplicates or inconsistencies).
Hosted relational tables in AWS RDS (PostgreSQL) or Snowflake, ensuring efficient joins between “Photographer” and “Photography History” data.
Implemented a GitHub-driven CI/CD pipeline with AWS Amplify, enabling automated builds and deployments for the front end whenever new code is pushed.

Front End
Built an interactive timeline website (React/Vue) where users can filter historical photography events by style.
Fetches data in real time (via REST/GraphQL) from the Amplify-hosted API, displaying a dynamic timeline and photographer profiles.
Employed a ready-made UI component library to streamline development and maintain a consistent, responsive layout.


LLM Applications
Integrated GPT-based text summarization to create succinct introductions for each photographer, reducing manual content curation.
Scheduled an LLM “Agent” to periodically audit database entries, flagging potential data conflicts or missing fields.
Used retrieval-augmented generation (RAG) principles, ensuring new textual content is grounded in the verified data pipeline.
