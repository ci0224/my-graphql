export const typeDefs = /* GraphQL */ `
  type JobPosting {
    id: ID!
    company: String
    degree_fields: [String]
    degree_preferred: String
    degree_required: String
    extracted: Boolean
    info_extract_date: String
    job_family: String
    job_location: String
    job_title: String
    min_years_preferred: Int
    max_years_preferred: Int
    min_years_required: Int
    max_years_required: Int
    skills_preferred: [String]
    skills_required: [String]
    title: String
    url: String
  }

  type Query {
    getJob(id: ID!): JobPosting
    listJobs: [JobPosting]
  }
`; 