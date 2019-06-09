import React,{Component} from 'react';
import './Layout.css';
import {connect} from "react-redux";

class Layout extends Component{
 render(){
     return(
     <div className="Layout">
         <main>
             {this.props.children}
         </main>
     </div>
             );

 }
}
function mapStateToProps(state) {
    return{

    }
}
export default connect(mapStateToProps)(Layout);