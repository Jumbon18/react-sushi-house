import React,{Component} from 'react';
import './AdminLayout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class AdminLayout extends Component{
    state = {
        menu: false
    };
    menuCloserHandler = () =>{
        this.setState({
            menu:!this.state.menu
        })
    };

    render() {
        return(
            <div className="admin-layout">
                <Drawer
                    onClose={this.menuCloserHandler}
                    isOpen={this.state.menu}
                />
                <MenuToggle
                    isOpen={this.state.menu}
                    onToggle={this.menuCloserHandler}
                />
                    {this.props.children}
            </div>
        );
    }
}
export default AdminLayout;