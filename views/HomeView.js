import React, { useEffect, useState, useContext } from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import { executeQuery } from "../hooks/useQuery";
import collections from "../queries/collections";
import SideNav from "../components/SideNav";
import Dashboard from "../components/Dashboard";
import { AppContext } from "../context/useContext";


export default function HomeView() {
  const context = useContext(AppContext)
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [homeView, setHomeView] = useState(<Dashboard />)

  useEffect(() => {( 
    async () => {
      let response = executeQuery(collections())

      if (response.data) {
        
      }
    })()
    // fetch Collections to render pages and sidenav

  }, [])

  // const handleSideNav = () => {
  //   if (homeView !== <SideNav />) setHomeView(<SideNav />)
  //   
  // }
  
  return (
  <View>
    <View style={styles.header}>
      <Button title="SideNav" onPress={() => setSideNavOpen(!sideNavOpen)} />
      <Text style={styles.title}>Yellow</Text>
    </View>
    {sideNavOpen && <SideNav setHomeView={setHomeView}/>}
    {homeView}
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 50,
  },
});