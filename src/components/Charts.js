import React from 'react'
import ChartContent from './ChartContent';
// import React, { useContext } from 'react'
// import { Redirect } from "react-router-dom"
// import { AuthContext } from "./Auth"


/*const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to = "/login"/>;
  }*/

export default function Charts() {
  return (
    <div className="font-roboto">
      <div class="flex flex-row">
        <div class="flex-auto lg:border lg:border-l border-t border-gray-300 dark:border-gray-700 lg:rounded-t-xl bg-white dark:bg-gray-800 h-screen relative overflow-auto no-scrollbar">
          <ChartContent />
        </div>
      </div>
    </div>
  );
};