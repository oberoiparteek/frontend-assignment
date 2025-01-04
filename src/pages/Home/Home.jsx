import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DataTable from "../../components/DataTable/DataTable";
import "./Home.css";
import useFetch from "../../hooks/useFetch";

const URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'

function Home() {
  const {data:projects, error, isLoading} = useFetch(URL, [])

  return (
    <div className="home">
      <Header />
      <div className="body">
        <h3 className="text-center">Highly-rated kickstarter projects</h3>
        <DataTable items={projects} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Home;
