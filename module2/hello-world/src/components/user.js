import PropTypes from 'prop-types'

function User({name, surName, isLoggedIn, age, friends,address}){

    if(!isLoggedIn){
        return <div>Giriş Yapmadınız.</div>
    }

    return(
        <>
        <h1>
             {
            isLoggedIn ? `${name} ${surName} ${age}` : "Giriş Yapmadınız"
        }
        </h1>
        {friends &&
            friends.map((friend) =>(
            <div key={friend.id}>{friend.name}
            </div>
            )
            )
            }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    isLoggedIn: PropTypes.bool,
    friends:PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};

User.defaultProps = {
    name : "isimsiz",
    isLoggedIn: false
}
export default User;