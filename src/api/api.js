import { fetchGet } from '@/util/https'

// 查询轮播图
export const httpCarouselPage = (params) => {
  return fetchGet(`/dobi-fast/carousel/page`, params)
}

// 查询书籍列表
export const httpBooks = (params) => {
  return fetchGet('/dobi-fast/gjBook/page', params)
}

