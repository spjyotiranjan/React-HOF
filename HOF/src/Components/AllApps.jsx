import React, { Component } from "react";

class AllApps extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  Datalist = () => {
    const data = this.state.userData;
    const dataList = data.map((e) => {
      return (
        <li className="list-elements" key={e.id}>
          <span>Id: {e.id}</span>
          <span>Name : {e.name}</span>
          <span>User Type: {e.user_type}</span>
        </li>
      );
    });
    return dataList;
  };

  renderByUserType = () => {
    const data = this.state.userData;
    const requiredData = data
      .filter((e) => e.user_type == "Designer")
      .map((e) => {
        return (
          <li className="list-elements" key={e.id}>
            <span>Id: {e.id}</span>
            <span>Name : {e.name}</span>
            <span>User Type: {e.user_type}</span>
          </li>
        );
      });
    return requiredData;
  };

  startingWithJ = ()=>{
    const data = this.state.userData;
    const requiredData = data.filter((e)=> e.name[0]=="J").map((e)=>{
      return(
        <li className="list-elements" key={e.id}>
            <span>Id: {e.id}</span>
            <span>Name : {e.name}</span>
            <span>User Type: {e.user_type}</span>
          </li>
      )
    })
    return requiredData
  }
  filterByAge =()=>{
    const data = this.state.userData
    const requiredData = data.filter((e)=> e.age>28 && e.age<=50).map((e)=>{
      return (
        <li className="list-elements" key={e.id}>
            <span>Id: {e.id}</span>
            <span>Name : {e.name}</span>
            <span>User Type: {e.user_type}</span>
          </li>
      )
    })
    return requiredData
  }

  totalYearsOfDesigner =()=>{
    const data  = this.state.userData
    let totalYears = 0
    data.filter((e)=> e.user_type == "Designer").forEach((e)=>{
      totalYears += e.years
    })
    return <li>{totalYears}</li>
  }

  render() {
    return (
      <div className="center">
        <h1>Display all items</h1>
        <ul>{this.Datalist()}</ul>
        <h1>Display based on user type</h1>
        <ul>{this.renderByUserType()}</ul>
        <h1>Filter all data starting with J</h1>
        <ul>{this.startingWithJ()}</ul>
        <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
        <ul>{this.filterByAge()}</ul>
        <h1>Find the total years of the designers</h1>
        <ul>{this.totalYearsOfDesigner()}</ul>
      </div>
    );
  }
}

export default AllApps;
