/**
 * @file AppController.js
 * @author TheWatcher01
 * @date 03-02-2025
 * @description Controller for handling application's main routes.
 */

class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
