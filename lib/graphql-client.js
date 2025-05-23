// lib/graphql-client.js
import { GraphQLClient } from "graphql-request";

const endpoint = "https://ap-south-1.cdn.hygraph.com/content/cm5u43on701w607v0t86tx5ex/master";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzY5MjUzNzgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtNXU0M29uNzAxdzYwN3YwdDg2dHg1ZXgvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJhZWMxYWQ4NS1iMjEyLTQ3N2ItODg3Ni1mNGNkZmQ0MmUxOWQiLCJqdGkiOiJjbTV4a2l2MzAwMnlrMDdvNTAxZDZiY2h1In0.xvVA02pbbauFoKNJEGYH4bhjBr2JjQHe1Dr0INC4ryU-PFLcgaL3L8xF5nhLtoKnsVX8BUz6cem1cIlpd41vm2u9sEctSx2IqImonuiPHZojv9AuzPRLXRAibJ8jRBV2quirioq3xICU9prLl4i5KAQLdrZKjfYRMkC8_4ZlVvkF25L7liBvae-DbNzA84VifTDKwqdTNiBKBDqN27bkLXtbE8eVfB8HmJLaJ5B-1jOiw3FYuwNBaT0SosQi_yv-RnsU7MiBTxYnx3t17xH--FkVWYixzz_9UKhkwK13MDJj2QrgBggwyvUdPnFWe1GCN2QhsiIIntoraA3bCIMEm8B8d5b5dfGMXxpInmh-Fe0-VhxqGYyF8ap6JfmW0jUMZ9CLIXW83a9m_uhoO2vW_s67dNrrdNfqC_gQevjkG4zKkP2DJARxA5MD_zUOXYeRm9td4lIEbvFPrTANkInf8r7extIQMPjtBmvmcrmWMRb2zm7qMGENRxLiNYZ_KeE4uThY-8R1CmPM5a7kLySej_JiZhoekdOQZkwenukjvFBNfrYcourWzJUedvKKBC-Fpw7Lhiad2RfgYrc9v2sWdgeScygy9ET3DeuL-w_JU-IgwOv8q0kGUTgQ3Qkxyyucky9AJVYXBjtFUfGwHzfhlj0vF_U4hqeYU6qeDQ81zyA`, // Replace with your valid token
  },
});

export default graphQLClient;