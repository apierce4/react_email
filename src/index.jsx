var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;
var IndexRoute = router.IndexRoute;

var EMAILS = {
    inbox: {
        0: {
            id: 0,
            from: "billg@microsoft.com",
            to: "TeamWoz@Woz.org",
            title: "Possible work opportunity",
            content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
        },
        1: {
            id: 1,
            from: "zuck@facebook.com",
            to: "TeamWoz@Woz.org",
            title: "Do you know PHP?",
            content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
        }
    },
    spam: {
        0: {
            id: 0,
            from: "ChEaPFl1ghTZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "WaNt CHEEp FlitZ",
            content: "Theyre CheEp"
        },
        1: {
            id: 1,
            from: "NiKEAIRJordanZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "JorDanz For SAle",
            content: "Theyre REELY CheEp"
        }
    }
};

var App = function(props){
    //console.log("hi");
    return(
        <div>
        <h1>Emails</h1>
         {props.children}
        </div>
        );
};
var EmailFolder = function(props) {
    //console.log('hi' + props);
    return (

              <Link to={'/emails/' + props.emailType}>{props.emailType}</Link>
      
    );
};
var EmailContent = function(props){
    console.log("ec");
    console.log(props);
    return(
        <div>
         {props.to}<br/>
         {props.from}<br/>
         {props.title}
        </div>
        );
};
//DISPLAY THE LIST EMAILS BASED ON TYPE
var EmailList = function(props) {
    console.log("el");
    console.log(props);
    var emails = Object.keys(props).map(function(emailId, index) {
        var email = props.emails[index];
        console.log(props.emails[index]);
    
        return (
            <li key={index}>
                <EmailContent to={email.to} from={email.from} title={email.title} />
            </li>
            
        );
    });
    return (
        <ul>
            {emails}
        </ul>
    );
};

//DISPLAY THE TYPES OF EMAILS: Inbox or SPAM
var TypeList = function(props) {

    var typesofemail = Object.keys(props.email).map(function(emailId, index) {
        var email = emailId;
    
        return (
            <li key={index}>
                <EmailFolder emailType={email} />
            </li>
            
        );
    });
    return (
        <aside>
        <ul>
            {typesofemail}
        </ul>
        </aside>
    );
};

var EmailListContainer = function() {
    //console.log("Type List");
    return <TypeList email={EMAILS} />;
};
//DISPLAY THE LIST EMAILS BASED ON TYPE
var EmailTypeContainer = function(props) {
    var emailtype = EMAILS[props.params.emailType];
    return <EmailList emails={emailtype} />;
};

var routes = (
    <Router history={hashHistory}>
         <Route path="/emails" component={App}>
            <IndexRoute component={EmailListContainer} />
            <Route path=":emailType" component={EmailTypeContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
