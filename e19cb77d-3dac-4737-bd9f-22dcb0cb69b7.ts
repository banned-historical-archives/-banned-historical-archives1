export default {
  resource_type: 'book',
  entity: {
    id: 'e19cb77d-3dac-4737-bd9f-22dcb0cb69b7',
    name: '解放日报情况简报第401期（1974.6.22）',
    internal: false,
    official: false,
    type: 'img',
    author: '解放日报党委办公室编，第401期，1974.6.22',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e19cb77d-3dac-4737-bd9f-22dcb0cb69b7/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e19cb77d-3dac-4737-bd9f-22dcb0cb69b7/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e19cb77d-3dac-4737-bd9f-22dcb0cb69b7/3.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '工人阶级一定要关心上层建筑革命——绢纺织厂工人评《中国通史简编》',
        authors: [
          '《解放日报》下厂下乡调查组',
        ],
        page_start: 1,
        page_end: 3,
        dates: [
          {
            year: 1974,
            month: 6,
            day: 22,
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
  path: 'e19cb77d-3dac-4737-bd9f-22dcb0cb69b7',
};