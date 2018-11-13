import React, { Component } from 'react';
import axios from 'axios'
import { PixelSpinner } from 'react-epic-spinners'
import Nav from './Nav'
import Card from './Card'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [],
      loading: true,
      search: ''
    }
  }

  fetchData(){
    axios.get('http://starlord.hackerearth.com/kickstarter')
    .then((data) => {
      data.data.sort(((a,b) => b['end.time'].localeCompare(a['end.time'])))
      this.setState({
        projects: data.data,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.fetchData()
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { loading, projects, search } = this.state
    if(loading === true) return <PixelSpinner className="spinner" color="#444"/>
    if(search !== ''){
      return (
        <div>
          <Nav search={this.handleSearch}/>
          <div className="container">
            {projects.map(project => project.title.includes(search) && (<Card project={project} key={project['s.no']} />))}
          </div>
        </div>
      )      
    } 
    
    return (
      <div>
        <Nav search={this.handleSearch}/>
        <div className="container">
          {projects && projects.map(project => (
            <Card project={project} key={project['s.no']}/>
          ))}        
        </div>
      </div>
    );
  }
}

export default App;
