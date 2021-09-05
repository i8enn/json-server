// Check system port or find free port
const fp = require('find-free-port')

// Returns passed port if he's free, or returns free port
async function checkOrGetFreePort(port) {
  let freePort, used
  // Check passed port
  if (port) {
    freePort = await fp(port)
  }
  // If port already user or not passed - find free port
  if (freePort[0] !== port || !port) {
    freePort = await fp(3000, 3100)
    used = true
  }
  return [freePort[0], used]
}

module.exports = checkOrGetFreePort
