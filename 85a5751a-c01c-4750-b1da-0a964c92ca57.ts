export default {
  resource_type: 'book',
  entity: {
    id: '85a5751a-c01c-4750-b1da-0a964c92ca57',
    name: '舒龙山关于批邓问题的材料附件（1976.10.6+）',
    internal: true,
    official: true,
    type: 'img',
    author: '七机部二院材料 722',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/85a5751a-c01c-4750-b1da-0a964c92ca57/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/85a5751a-c01c-4750-b1da-0a964c92ca57/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/85a5751a-c01c-4750-b1da-0a964c92ca57/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/85a5751a-c01c-4750-b1da-0a964c92ca57/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/85a5751a-c01c-4750-b1da-0a964c92ca57/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/85a5751a-c01c-4750-b1da-0a964c92ca57/6.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '舒龙山关于批邓问题的材料附件',
        authors: [
          '七机部',
        ],
        page_start: 1,
        page_end: 6,
        dates: [
          {
            year: 1977,
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
  path: '85a5751a-c01c-4750-b1da-0a964c92ca57',
};