import AuthModel from '../Model/AuthModel.js'
import encodePassword from '../Utils/encodePassword.js'
import jwt from 'jsonwebtoken'

const getToken = (id, role = 'user') => {
    const secret = process.env.TOKEN_SECRET;
    const tokenLife = parseInt(process.env.TOKEN_LIFE);
    const refreshLife = parseInt(process.env.TOKEN_REFRESH_LIFE);

    const user = { id, role };
    const tokenOptions = { expiresIn: tokenLife };
    const refreshOptions = { expiresIn: refreshLife };

    const token = jwt.sign(user, secret, tokenOptions);
    const refreshToken = jwt.sign(user, secret, refreshOptions);

    return {
        status: 'Logged in',
        token,
        refreshToken
    };
}


const validateToken = (req, res, next) => {
    const secret = process.env.TOKEN_SECRET;
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
    if (token) {
        token = token.replace(/Bearer|bearer|'|"|undefined| /g, '');

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.json({ error: true, message: 'Unauthorized access.' });
            }

            req.user = decoded;
            userContextInstance.setGlobalState(req.user);
            next();
        });
    } else {
        return res.send({ error: true, message: 'No token provided.' });
    }
}


const login = async (req, res) => {
    const user = req.body
    user.password = encodePassword(user.password)
    const logged = await AuthModel.login(user)
    if (logged) {
        const auth = getToken(logged, 'user')
        res.send({ logged, auth })
    } else { res.send(401) }
}

export default {
    login,
    validateToken,
    getToken
}