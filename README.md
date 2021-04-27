# Radiation Absorption by Greenhouse Gases: A Physics Simulation

Molecules in the atmosphere respond differently to the infrared radiation that is re-emitted by the earth after it absorbs visible light from the sun. Greenhouse gases like carbon dioxide, methane, and nitrous oxide absorb this radiation, while non-greenhouse gases like oxygen (dioxygen) and nitrogen (dinitrogen) do not. After absorbing infrared radiation, greenhouse gas molecules begin oscillating and vibrating. Eventually, they release the energy they've absorbed by emitting another wave of infrared radiation. This re-emitted radiation is in turn absorbed by neighboring molecules in the atmosphere, causing them to gain speed (kinetic energy) and, since temperature is proportional to kinetic energy, raising their temperature.

This property of absorbing and re-emitting infrared radiation explains why greenhouse gases like carbon dioxide trap heat effectively.

This application simulates, in a simplified way, the response of different gases to the infrared radiation emitted by the earth. Users begin by selecting four molecules whose response to infrared radiation they would like to observe, choosing from the provided greenhouse and non-greenhouses gases. After selecting the molecules, users start the simulation by clicking the play button. While the emitted infrared radiation is absorbed by greenhouse gases, it passes through non-greenhouse gases. After absorption, the greenhouse gases begin oscillating. Users can switch on the _Re-emission_ toggle to observe a simplified re-emission effect (unlike this two-dimensional simulation, in the real-world molecules oscillate in three-dimensional space, and hence re-emit radiation in multiple directions).

![radiationabsorption](https://user-images.githubusercontent.com/19311953/116219743-3dbbc100-a74c-11eb-9aa4-dc0e1df01875.gif)

## Try the application!

A live deployment of the application can be accessed [here](https://apps.graasp.eu/5acb589d0d5d9464081c2d46/60546e814e95e95abdd404a9/latest/index.html). Please submit any issues you identify to the application's [GitHub repository](https://github.com/graasp/graasp-app-radiation-absorption/issues).

## Run and modify the application locally

- Once you clone the repository, run `yarn` or `npm install` to install its dependencies.
- In the project directory, make sure to create an `.env.local` file and to add `"REACT_APP_BASE="` to the top of this file. You can do this through your shell by running `touch .env.local` and `echo "REACT_APP_BASE=" >> .env.local` in the project root.
- Run `yarn start` (or `npm start`) to start the application. It should automatically open in your browser at `localhost:3000`. You can also access it in development mode on `http://localhost:3000/?appInstanceId=6156e70ab253020033364411&spaceId=5b56e70ab253020033364411&dev=true`
- The simulation's main components are located in `src/components/lab` (canvas components) and `src/components/common` (side menu and controls). It uses [React](https://github.com/facebook/react), [React-Redux](https://github.com/reduxjs/react-redux), and [React-Konva](https://github.com/konvajs/react-konva).
