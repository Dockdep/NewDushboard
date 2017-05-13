﻿using System;
using GParser;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace VGCMS
{
    class Program
    {
        static void Main(string[] args)
        {
            try {
                string host = "http://127.0.0.1:9091/API";
                string password = "qwerty";
                Dictionary<string, string> options = new Dictionary<string, string>();
                Aparser parser = new Aparser(host, password, options);
                string[] queries = new string[] {
                                                "test1",
                                                "test2",
                                                "test3",
                                                "test4",
                                                "test5"};
                dynamic result = parser.BulkRequest(queries, "SE::Google", "Pages Count use Proxy", 1,5).Result;
                //dynamic result = parser.Ping().Result;
                Console.WriteLine(result.data);
                Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
    
        }
    }
}