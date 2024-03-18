import PropTypes from 'prop-types';

const Link = ({route}) => {
    console.log(route)
    return (
        <div>

            <li className="mr-36  bg-blue-300 border-2 rounded-md p-2" >
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};
Link.propTypes={
    route:PropTypes.object
}
export default Link;