export default {
  resource_type: 'book',
  entity: {
    id: '1ba36e68-bf18-4627-bf44-73fcd6c30f32',
    name: '关于舒龙山利用清查，整中央首长黑材料、镇压革命群众的严重罪行（1976.10.6+）',
    internal: false,
    official: false,
    type: 'img',
    author: '七机部二院材料 721',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ba36e68-bf18-4627-bf44-73fcd6c30f32/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ba36e68-bf18-4627-bf44-73fcd6c30f32/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ba36e68-bf18-4627-bf44-73fcd6c30f32/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ba36e68-bf18-4627-bf44-73fcd6c30f32/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ba36e68-bf18-4627-bf44-73fcd6c30f32/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1ba36e68-bf18-4627-bf44-73fcd6c30f32/6.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '关于舒龙山利用清查，整中央首长黑材料、镇压革命群众的严重罪行',
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
  path: '1ba36e68-bf18-4627-bf44-73fcd6c30f32',
};