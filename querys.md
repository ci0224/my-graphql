# query requests

query

```graphql
query {
  getJob(id: "fay_4022739008") {
    id
    company
    job_title
    job_location
    job_family
    degree_fields
    degree_preferred
    degree_required
    min_years_preferred
    max_years_preferred
    min_years_required
    max_years_required
    skills_preferred
    skills_required
    title
    url
    info_extract_date
    extracted
  }
}
```

list

```graphql
query ListAllJobs {
  listJobs {
    id
    company
    job_title
    job_location
    job_family
    degree_required
    degree_preferred
    degree_fields
    min_years_required
    max_years_required
    min_years_preferred
    max_years_preferred
    skills_required
    skills_preferred
    url
    extracted
    info_extract_date
    title
  }
}
```
