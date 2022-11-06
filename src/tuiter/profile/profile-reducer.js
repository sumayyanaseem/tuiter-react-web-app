import {createSlice} from "@reduxjs/toolkit";

let userProfile = {
    firstName: 'Sumayya',
    lastName: 'N',
    handle: '@Sumayya',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: 'Student, Computer Science, AI, Space, and renewable enthusiast. Retuits and '
         + 'likes are not endorsements.',
    website: 'youtube.com/sumayyan',
    location: 'Boston, MA',
    dateOfBirth: '1997-02-24',
    dateJoined: '09/2022',
    followingCount: 340,
    followersCount: 223,
    numberOfTweets: 6114
};

const profileSlice = createSlice({
                                     name: 'userProfile',
                                     initialState: userProfile,
                                     reducers: {
                                         editProfile(state, action) {
                                             return action.payload;
                                         }
                                     }
                                 });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;