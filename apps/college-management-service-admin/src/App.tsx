import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CollegesList } from "./colleges/CollegesList";
import { CollegesCreate } from "./colleges/CollegesCreate";
import { CollegesEdit } from "./colleges/CollegesEdit";
import { CollegesShow } from "./colleges/CollegesShow";
import { CollegePlacementList } from "./collegePlacement/CollegePlacementList";
import { CollegePlacementCreate } from "./collegePlacement/CollegePlacementCreate";
import { CollegePlacementEdit } from "./collegePlacement/CollegePlacementEdit";
import { CollegePlacementShow } from "./collegePlacement/CollegePlacementShow";
import { CollegeWiseCourseList } from "./collegeWiseCourse/CollegeWiseCourseList";
import { CollegeWiseCourseCreate } from "./collegeWiseCourse/CollegeWiseCourseCreate";
import { CollegeWiseCourseEdit } from "./collegeWiseCourse/CollegeWiseCourseEdit";
import { CollegeWiseCourseShow } from "./collegeWiseCourse/CollegeWiseCourseShow";
import { StatesList } from "./states/StatesList";
import { StatesCreate } from "./states/StatesCreate";
import { StatesEdit } from "./states/StatesEdit";
import { StatesShow } from "./states/StatesShow";
import { CitiesList } from "./cities/CitiesList";
import { CitiesCreate } from "./cities/CitiesCreate";
import { CitiesEdit } from "./cities/CitiesEdit";
import { CitiesShow } from "./cities/CitiesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"College Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Colleges"
          list={CollegesList}
          edit={CollegesEdit}
          create={CollegesCreate}
          show={CollegesShow}
        />
        <Resource
          name="CollegePlacement"
          list={CollegePlacementList}
          edit={CollegePlacementEdit}
          create={CollegePlacementCreate}
          show={CollegePlacementShow}
        />
        <Resource
          name="CollegeWiseCourse"
          list={CollegeWiseCourseList}
          edit={CollegeWiseCourseEdit}
          create={CollegeWiseCourseCreate}
          show={CollegeWiseCourseShow}
        />
        <Resource
          name="States"
          list={StatesList}
          edit={StatesEdit}
          create={StatesCreate}
          show={StatesShow}
        />
        <Resource
          name="Cities"
          list={CitiesList}
          edit={CitiesEdit}
          create={CitiesCreate}
          show={CitiesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
