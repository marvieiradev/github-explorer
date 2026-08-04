import {useState} from 'react';
import {fetchUserProfile, fetchUserRepos} from '../services/githubApi';
import SearchForm from './SearchForm';
import ErrorMessage from './ErrorMessage';