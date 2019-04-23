module.exports = {
  format: 'pronos',
  title: 'foot-mondial-2019',
  dev_data_url: 'http://localhost:3004/api',
  prod_data_url: 'https://libe-labo.site/api',
  content: {
    teams: [
      { id: 'france', name: 'France', short_name: 'Fra', color_1: '#1B1464', color_2: '#FFFFFF', image: 'http://si.te/img.jpg' }
    ],
    groups: [
      { id: 'A', teams: ['france', 'germany', 'uruguay', 'usa'], 'out': [1, 4, 6] }
    ]
  }
}
