module.exports = () => {
    return {
        files: ['*.js'],
        tests: ['test/**/*spec.js'],
        env: {
            type: 'node'
        }
    }
}