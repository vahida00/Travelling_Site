let isUserLoggedIn=false;

isUserLoggedIn=true;
 let username="tanay";
 
class UserStatus extends React.Component{
	render(){
		return(
			<div>
				<button> LogIn </button>
				<h1> Hey ! Username
			</div>
			)
	}
}
ReactDOM.render(
	<UserStatus/>,document.getElementById("root")
);