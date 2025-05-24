import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { TGetObjectValues } from '@/types/common';
import { INVALIDATION_TAGS } from './constants';

export type TEndpointBuilder = EndpointBuilder<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
    TGetObjectValues<typeof INVALIDATION_TAGS>,
    'rtkQuery'
>;
