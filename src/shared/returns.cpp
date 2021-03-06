// uuid: ae430224-0101-457a-97ed-9100bf646383

// ------------------------------------------------------------------------
// Copyright (c) 2019 Alexandre Bento Freire. All rights reserved.
// Licensed under the MIT License+uuid License. See License.txt for details
// ------------------------------------------------------------------------

// ------------------------------------------------------------------------
//                               Includes
// ------------------------------------------------------------------------

#include "../numnjs.h"
#include <node.h>

namespace numnjs {

// ------------------------------------------------------------------------
//                               Result Functions
// ------------------------------------------------------------------------

void returnString(v8::Isolate *isolate, const char *value, const v8args &args) {
  args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, value));
}

void returnNumber(v8::Isolate *isolate, double value, const v8args &args) {
  v8::Local<v8::Number> res = v8::Number::New(isolate, value);
  args.GetReturnValue().Set(res);
}

} // namespace numnjs