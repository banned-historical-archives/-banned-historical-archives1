export default {
  "entity": {
    "id": "8da1b3f4-a862-487f-9c7a-af20178846c8",
    "name": "资料摘编（内部参考）第七期（1968.1.1）",
    "internal": true,
    "official": true,
    "type": "img",
    "author": "张春桥，1968.1.1，工总司办公室资料组编",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/4.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/5.jpg"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "jpg",
    "articles": [
      {
        "title": "张春桥在“热烈欢迎中国人民解放军毛泽东思想宣传队进驻市公安局大会”上的讲话",
        "alias": "张春桥同志在“热烈欢迎中国人民解放军毛泽东思想宣传队进驻市公安局大会”上讲话（摘录）",
        "authors": [
          "张春桥"
        ],
        "page_start": 1,
        "page_end": 5,
        "tags": [
          {
            "name": "工总司办公室资料组",
            "type": "issuer"
          },
          {
            "name": "《从头越》",
            "type": "issuer"
          }
        ],
        "ocr_exceptions": {
          "1": {
            "content_thresholds": [
              0.3,
              0.1,
              0,
              0
            ]
          }
        },
        "dates": [
          {
            "year": 1967,
            "month": 12,
            "day": 19
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      }
    ],
    "ocr": {
      "content_thresholds": [
        0,
        0.1,
        0,
        0
      ]
    },
    "ocr_exceptions": {}
  },
  "parser_id": "automation",
  "path": "8da1b3f4-a862-487f-9c7a-af20178846c8",
  "resource_type": "book",
  "version": 2
};