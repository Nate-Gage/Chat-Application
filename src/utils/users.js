const users = []

const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required',
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if (existingUser) {
        return {
            error: 'Username is already being used'
        }
    }

    const user = { id, username, room }
    
    // push user on to the users array
    users.push(user)
    return { user }
}

const getUser = (id) => {
    return users.find((user) => {
        return user.id === id
    })
}

// For every user in given room whose user.room === room, return user to array. 
const getUsersInRoom = (room) => {
    return users.filter((user) => {
        return user.room === room
    })
}

// findIndex() will return -1 if no match, >=0 if match
const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index !== -1) {
        // this will return an array
        return users.splice(index, 1)[0]
    }
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


