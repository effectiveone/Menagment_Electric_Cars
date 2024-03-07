FROM node:14
WORKDIR "/appnode"
COPY ./appnode/package.json ./
RUN yarn install
COPY ./appnode/ .
ENV API_PORT=5002
ENV API_KEY=JAbx2Egt7FxTyJnBqtcqk76H7jrhjbUu32ach0MMzJiSTmXu6CTzuj92oZhQJFxt
ENV MONGO_URI_Z=https://data.mongodb-api.com/app/data-knklj/endpoint/data/v1
ENV TOKEN_KEY=effectiveRkNmM9Z-1oJ?Mke66YIVXtigd9tz-RDhPyTT8E34dqWC7y7TkZMPpsr-cLo24GwJYC4v1LUyC9iMmSUuRJPYfWsml2MM92soTXcX-=9lDK1VMYj8jKcBcgaGwpDspJWWame6tmpwLsvEi8?FhafoXyxjKyaPMbzN=a?jQ=FdXbS3Yw22HqThrIP!ggKqTLM0c9vIbN=BNmkbD5jVXvPPNKaakZVkSHfjM6DXHajVPqiwa6abA74F1ab
ENV MONGO_URI=mongodb://mongodb:27017/electriccar
CMD ["yarn", "start"]