/*
################################################################################
# Copyright 2019 IBM Corp. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
################################################################################
*/
import * as Actions from './actionTypes'

export function fetchStates() {
    return {type: Actions.STATES_FETCH}
}

export function fetchStatesSuccess(response) {
    return {type: Actions.STATES_FETCH_SUCCESS, response}
}

export function fetchStatesFailure(error) {
    return {type: Actions.STATES_FETCH_FAILURE, error}
}

export function fetchStatesExtensions() {
    return {type: Actions.STATES_FETCH_EXTENSIONS}
}

export function fetchStatesExtensionsSuccess(response) {
    return {type: Actions.STATES_FETCH_EXTENSIONS_SUCCESS, response}
}

export function fetchStatesExtensionsFailure(error) {
    return {type: Actions.STATES_FETCH_EXTENSIONS_FAILURE, error}
}

export function insertStates() {
    return {type: Actions.STATES_INSERT}
}

export function insertStatesSuccess(response) {
    return {type: Actions.STATES_INSERT_SUCCESS, response}
}

export function insertStatesFailure(error) {
    return {type: Actions.STATES_INSERT_FAILURE, error}
}

export function deleteStates() {
    return {type: Actions.STATES_DELETE}
}

export function deleteStatesSuccess(response) {
    return {type: Actions.STATES_DELETE_SUCCESS, response}
}

export function deleteStatesFailure(error) {
    return {type: Actions.STATES_DELETE_FAILURE, error}
}

export function resetEngine() {
    return {type: Actions.ENGINE_RESET}
}

export function resetEngineSuccess(response) {
    return {type: Actions.ENGINE_RESET_SUCCESS, response}
}

export function resetEngineFailure(error) {
    return {type: Actions.ENGINE_RESET_FAILURE, error}
}

export function refreshDate(refreshedDate) {
    return {type: Actions.STATES_REFRESH_DATE, refreshedDate}
}

