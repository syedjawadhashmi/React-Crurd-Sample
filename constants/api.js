import axios from 'axios';
axios.defaults.baseURL = 'https://meetupsapi.herokuapp.com/api';
const fakeGroupId = '58ea7cdcf1564e00118e2ea7'

class MeetupApi {
    constructor(props) {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }
    async fetchGroupMeetups() {
        try {
            const { data } = await axios.get(this.path);
            return data.meetups;
        } catch (e) {
            throw e
        }
    }
    async createGroupMeetups(args) {
        try {
            const res = await axios.post(`${this.path}/new`, { ...args });
            alert('Sucessfully Created Meetup')
            console.log(res);
            return res;
        } catch (e) {
            throw e
        }
    }
}

export {
    MeetupApi
};

class UserApi {
    constructor() {
        this.path = '/users';
    }

    async login(args) {
        try {
            const { data } = await axios.post(`${this.path}/auth0`, args)
             return data;
        }
        catch (e) {
            throw e
        }
    }
}

export const User = new UserApi();  