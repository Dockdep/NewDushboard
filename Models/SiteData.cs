using System;
using System.Collections.Generic;

namespace LiveGameFeed.Models
{
    public partial class SiteData
    {
        public int Id { get; set; }
        public string Xpath { get; set; }
        public string Data { get; set; }
    }
}
