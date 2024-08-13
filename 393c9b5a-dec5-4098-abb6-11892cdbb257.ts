export default {
  resource_type: 'book',
  entity: {
    id: '393c9b5a-dec5-4098-abb6-11892cdbb257',
    name: '关于舒龙山参与“四人帮”篡党夺权阴谋活动的情况报告（1976.11.27）',
    internal: false,
    official: false,
    type: 'img',
    author: '七机部二院材料 724',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/393c9b5a-dec5-4098-abb6-11892cdbb257/8.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '关于舒龙山参与“四人帮”篡党夺权阴谋活动的情况报告',
        authors: [
          '七机部二院',
        ],
        page_start: 1,
        page_end: 8,
        dates: [
          {
            year: 1976,
            month: 11,
            day: 27,
          },
        ],
      },
    ],
    ocr: {
      auto_vsplit: true,
      vsplit: 0.5,
      content_thresholds: [
        0,
        0,
        0,
        0,
      ],
      line_merge_threshold: 30,
      standard_paragraph_merge_strategy_threshold: 0,
      differential_paragraph_merge_strategy_threshold: 30,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '393c9b5a-dec5-4098-abb6-11892cdbb257',
};