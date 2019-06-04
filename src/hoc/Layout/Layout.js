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
         {<footer className="footer" id="animate-area">
             <div className="wrapper">
                 <div>
                     <h2>Awesome Weather Cast</h2>
                     <p>Created by Alex Pyvovarov and Irina Telesheva</p>
                 </div>
                 <div className="footer-text">
                     <p>Get our contacts:</p>

                 </div>
             </div>
         </footer>}
     </div>
             );

 }
}
function mapStateToProps(state) {
    return{

    }
}
export default connect(mapStateToProps)(Layout);