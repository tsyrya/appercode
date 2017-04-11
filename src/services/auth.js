import {http} from '../services/request'
import {router} from '../router'
import toastr from 'toastr'

export default {
  login(userName, password, redirect = null) {
    http.post('login', {username: userName, password: password, generateRefreshToken: true},({ data }) => {
      localStorage.setItem('jwt-token', data.sessionId)
      localStorage.setItem('jwt-refresh-token', data.refreshToken)
      if (redirect) {
        router.push(redirect)
      }
    }, error => {
      var status = error.response.status;
      if (status == 401){
        toastr.error('Credentials are not valid')
      }
    })
  },
  checkAuth() {
    var jwt = localStorage.getItem('jwt-token')

    return jwt ? true : false
  },
  logout() {
    localStorage.removeItem('jwt-token')
    localStorage.removeItem('jwt-refresh-token')
    router.push('/login')
  },
}
